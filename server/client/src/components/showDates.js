// import React, { useState } from 'react';
// import { Button } from "react-bootstrap";
// import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
// import ChooseDays from './dayPicker'

// const ShowDates = (props) => {
//   const [popoverOpen, setPopoverOpen] = useState(false);

//   const toggle = () => setPopoverOpen(!popoverOpen);

//   return (
//     <div>
//       <Button variant="outline-info mr-2 float-right" size="md" id="Popover1" type="button">
//         Choose Date Range
//       </Button>
//       <Popover style={{ color: '#FFCBA0' }} placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
//         {/* <PopoverHeader>Popover Title</PopoverHeader> */}
//         <PopoverBody>< ChooseDays /></PopoverBody>
//       </Popover>
//     </div>
//   );
// }

// export default ShowDates;