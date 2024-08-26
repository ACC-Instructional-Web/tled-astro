import React, { useState } from 'react';
import Event from './Event.jsx';

const getUniqueTags = (events) => {
  // Get a unique array of tags
  let allTags = [];
  events.forEach(function (item) {
    if (item[8]) {
      const tagArray = item[8].trim().split(/\s+/);
      allTags = [...allTags, ...tagArray];
    }
  });
  // Convert the array to unique values
  allTags = [...new Set(allTags)].sort();
  return allTags;
};

const filterEvents = (events) => {
  events
    .filter((event) => new Date(event[0].replace(/.*?,\s/, '')).valueOf() > Date.now())
    .sort((a, b) => {
      // Take the day of the week off the front of the string and convert to Date # value
      // Probably unnecessary since the events are returned in the order in sheet
      a = new Date(a[0].replace(/.*?,\s/, '')).valueOf();
      b = new Date(b[0].replace(/.*?,\s/, '')).valueOf();
      return a - b;
    });
};

export default function CalendarGrid({ calendarData }) {
  // const [tags, setTags] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  const [activeEvents, setActiveEvents] = useState([]);

  const toggleTag = (tag) => {
    console.log('TAG: ', tag);
    // Make a copy of current state activeTags
    const at = [...activeTags];
    // console.log(activeTags);
    // Add or remove tag from activeTags
    at.includes(tag) ? at.splice(at.indexOf(tag), 1) : at.push(tag);

    // this.filterSessionsByTag(at);

    // If there are active tags, filter the events by tag else show all events
    at.length > 0 ? setActiveEvents(filterEventsByTag(at)) : setActiveEvents(events);
    console.log('ActiveTags :>> ', at);
    console.log('activeEvents :>> ', activeEvents);
    setActiveTags(at);
  };

  const filterEventsByTag = (activeTags) =>
    events.filter((event) => {
      const eventTags = event[8].trim().split(/\s+/);
      return (
        // return true if event has at least one active tag
        activeTags.some((tag) => eventTags.indexOf(tag) > -1)
      );
    });

  const events = calendarData.values;

  // Remove the header row
  events.shift();

  filterEvents(events);

  const tags = getUniqueTags(events);
  // setat(tags);

  return (
    <div>
      {tags.length > 0 && (
        <div className="mt-6 mb-8">
          <p>Click on the tags below to filter the workshops by topic:</p>
          {tags.map((tag, i) => (
            <button
              className="tag"
              key={i}
              onClick={() => toggleTag(tag)}
              // active={activeTags.includes(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-around gap-4">
        {activeEvents.length > 0
          ? activeEvents.map((event, i) => <Event event={event} key={i} />)
          : events.map((event, i) => <Event event={event} key={i} />)}
      </div>
    </div>
  );
}
