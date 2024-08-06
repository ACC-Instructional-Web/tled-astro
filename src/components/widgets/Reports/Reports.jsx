import React, { useState, useEffect } from 'react';
import TagSearch from './TagSearch';

function getUniqueTags(currentReport) {
  // Get a unique array of tags
  let tags = [];
  currentReport.forEach(function (item) {
    const tagArray = item[5] ? item[5].trim().split(/\s+/) : [];
    tagArray.shift();
    tags = [...tags, ...tagArray];
  });
  // Convert the array to unique values
  return [...new Set(tags)];
}

export default function Reports({ currentReport, selectedReport }) {
  const tags = getUniqueTags(currentReport);
  const [activeTags, setActiveTags] = useState([]);
  const [activeReports, setActiveReports] = useState(currentReport);
  const [searchResults, setSearchResults] = useState([]);

  //   console.log('currentReport :>> ', currentReport);

  // useEffect hook that runs when firstState changes
  useEffect(() => {
    console.log('useEffect called');
    console.log('activeTags.length > 0 :>> ', activeTags.length > 0);
    // Update secondState based on the new value of firstState
    const filteredReports = filterReportsByTag(activeTags);
    console.log('filteredReports :>> ', filteredReports);
    setActiveReports(activeTags.length > 0 ? filteredReports : currentReport);
  }, [activeTags]); // Dependency array: run this effect when firstState changes

  function toggleTag(tag) {
    console.log(tag);
    // Add or remove tag from activeTags
    !activeTags.includes(tag)
      ? setActiveTags([...activeTags, tag])
      : setActiveTags(activeTags.filter((activeTag) => activeTag !== tag));
  }

  function filterReportsByTag(activeTags) {
    return currentReport.filter((report) => {
      const reportTags = report[5] ? report[5].trim().split(/\s+/) : '';
      if (activeTags.some((tag) => reportTags.indexOf(tag) > -1)) {
        console.log('Has Active Tag');
        return true;
      }
    });
  }

  return (
    <>
      <h2>{selectedReport}</h2>
      {/* TAGS */}
      {tags.length > 0 && (
        <>
          <p>Click on the tags to filter reports by category:</p>
          <div className="flex lg:block">
            <div className="basis-3 mb-3">
              {tags.map((tag, i) => (
                <button
                  className="tag"
                  key={i}
                  onClick={() => toggleTag(tag)}
                  //   active={activeTags.includes(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            {/* Search Form */}
            <TagSearch
              tags={tags}
              toggleTag={toggleTag}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          </div>
        </>
      )}
      <div className="md:columns-2 gap-8">
        {activeReports
          ? activeReports.map((report) => (
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  {
                    // If the report has a URL, display it as a link
                    report[4] ? (
                      <a href={report[4]} target="_blank">
                        <h3 className="font-bold text-xl mb-2">{report[2]}</h3>
                      </a>
                    ) : (
                      <h3 className="font-bold text-xl mb-2">{report[2]}</h3>
                    )
                  }
                  <p className="text-gray-700 text-base">{report[1]}</p>
                  <p>{report[3]}</p>
                  {report[5] && (
                    <div>
                      {report[5].split(' ').map((tag) => (
                        <span className="inline-block bg-slate-200 mx-1">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
