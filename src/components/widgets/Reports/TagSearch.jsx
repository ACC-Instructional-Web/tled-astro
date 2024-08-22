export default function TagSearch({ tags, activeTags, toggleTag, searchResults, setSearchResults }) {
  function handleSearch(e) {
    console.log(e.target.value);
    const newSearchResults = e.target.value
      ? tags
          .filter((tag) => {
            // Here we need to find cities that match
            const regex = new RegExp(e.target.value, 'gi');
            return tag.match(regex);
          })
          .sort()
      : [];
    setSearchResults(newSearchResults);
  }

  return (
    <form className="flex flex-col justify-center border-2 p-2" onSubmit={(e) => e.preventDefault()}>
      <input className="p-2" type="text" placeholder="Search for Tag" onChange={handleSearch} />
      <div className="relative">
        {searchResults.length > 0 && (
          <ul className="">
            <button className="close" onClick={() => setSearchResults([])}>
              &times;
            </button>
            {searchResults.map((result, i) => (
              <li key={i} className="">
                {/* <button className="tag" onClick={() => toggleTag(result)} active={activeTags.includes(result)}> */}
                <button
                onClick={() => toggleTag(result)}
                className={activeTags.includes(result) ? 'tag active': 'tag'}
                >
                  {result}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}

// const SearchForm = styled.form`
//   flex: 1;
//   input {
//     margin-bottom: 2px;
//   }
//   div {
//     position: relative;
//     ul {
//       background: rgba(255, 255, 255, 0.95);
//       padding: 0.4rem;
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       list-style: none;
//       margin-left: 0;
//       z-index: 9999;

//       border: 1px solid #ccc;

//       li {
//         /* border-bottom: 1px solid #ccc; */
//       }

//       .close {
//         margin: 0;
//         padding: 0;
//         position: absolute;
//         top: 0.5rem;
//         right: 0.5rem;
//         background: #666;
//         color: #fff;
//         font-size: 1.2rem;
//         width: 1rem;
//         height: 1.15rem;
//         text-align: center;
//         line-height: 1rem;
//         cursor: pointer;
//         &:hover {
//           background: #ccc;
//         }
//       }
//     }
//   }
// `;
