import React from 'react';

// [
//   "Date for Auto Check",
//   "Web Display Date",
//   "Event Title",
//   "Presenters",
//   "Mode",
//   "Image",
//   "Link to Register",
//   "Flag",
//   "Tags",
//   "Start Time Formatted",
//   "End Time Formatted (leave blank if all day)"
// ]

const Event = (props) => {
  const { event } = props;
  const tags = event[8] ? event[8].trim().split(/\s+/) : null;
  const bgImg = event[5];
  const title = event[2];
  const link = event[6];
  return (
    <div className="min-w-40 cursor-pointer basis-1/5 mb-4 transition ease-in-out hover:scale-95 duration-500">
      <div style={{ backgroundImage: `url(${bgImg})` }} className="bg-cover h-0 w-full flex pb-[100%] mb-4">
        {event[7] && <span>{event[7]}</span>}
      </div>
      {event[1]}
      <p class="pb-2">{link ? <a href={link}>{title}</a> : <span>{title}</span>}</p>
      {tags && (
        <div>
          {tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Event;

// const EventBox = styled.div`
//   /* flex: 1 1 200px; */
//   flex: 0 0 20%;
//   min-width: 170px;
//   margin: 1rem;
//   cursor: pointer;
//   transition: all 0.1s;

//   @media (max-width: 768px) {
//     min-width: 240px;
//   }

//   /* &:last-child {
//     @media (max-width: 619px) {
//       max-width: 100%;
//     }
//     max-width: 280px;
//   } */

//   &:hover {
//     transform: scale(0.99);
//   }

//   h1 {
//     // color: blue;
//     font-size: 1rem;
//   }
// `;

// const Image = styled.div`
//   height: 0;
//   padding-bottom: 100%;
//   width: 100%;
//   // background: url('https://drive.google.com/thumbnail?id=1bvC4SRreXx3SKsBoj3ui6EphifhAB_dm&sz=w400') no-repeat top left;
//   background: ${(props) => `url(${`${props.image}&sz=w400`}) no-repeat top left`};
//   background-size: cover;
//   display: flex;
//   margin-bottom: 1rem;
// `;

// const Flag = styled.span`
//   background-color: #000;
//   color: #fff;
//   font-size: 0.9rem;
//   display: inline-block;
//   text-align: center;
//   padding: 0.6rem 1rem;
//   margin-left: auto;
//   margin-top: 1rem;
//   height: fit-content;
//   text-transform: uppercase;
// `;

// const Tag = styled.span`
//   display: inline-block;
//   padding: 2px 6px;
//   margin: 4px;
//   background: #efefef;
//   color: #333;
//   border-radius: 4px;
//   font-size: 0.8em;
// `;
