import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 20px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: transform .5s ease;
        :hover {
            transform: scale(1.5);
        }
`;

export const MainInfoWrapper = styled.div`
    height: 90%;
    width: 90%;
`;

export const Photo = styled.img`
    height: 100%;
    width: 50%;
`;
export const PartInfoWrapper = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
`;

export const InfoWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Info = styled.p`
    margin: 0;
`;

// body {
//     margin-top: 100px;
//     display:flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     font-family: 'Poppins', sans-serif;
// }

// #cards{
//     display: flex;
//     flex-wrap: wrap;
//     height: 100vh;
    
// }
// .card {
//     width: 250px;
//     height: 300px;
//     border-radius: 20px;
//     box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
//     margin: 2rem;
//     cursor: pointer;
//     z-index: 1;
//     transition: transform .5s ease;
//     position: relative;
// }

// .card:hover {
//     transform: scale(1.5);
// }

// .top {
//     display: flex;
//     justify-content: space-between;
// }
// .top-info p{
//     margin-top: -10px;
// }

// .bottom-info {
//     margin-top: -20px;
//     font-size: 20px;
//     margin-bottom: 10px;
    
// }

// .bottom-info ul{
//     list-style-type: none;
//     padding-left: 10px;

// }
// .bottom-info ul li {
//     display: flex;
//     justify-content: space-between;
// }

// #cards img{
//     width: 100px;
//     height: 130px;
//     border-radius: 10px;
//     margin: 10px;
// }
// .pink {
//     background-color: pink;
// }

// .blue {
//     background-color: powderblue;
// }

// .family {
// 	float: left; text-align: center;
// 	list-style-type: none;
// 	position: relative;
// 	padding: 20px 5px 0 5px;
	
// 	transition: all 0.5s;
// 	-webkit-transition: all 0.5s;
// 	-moz-transition: all 0.5s;
// }

// .spouse {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
// }
// .divider {
//     width: 50px;
//     border-bottom: 1px solid black;
//     margin: 1px;
//   }

// .divider::after{
// 	content: '';
// 	border-left: 6px solid black;
//     height: 190px;
//     position: absolute;
//     left: 50%;
// }

// .devider:last-child::before{
// 	border: none;
// }

// .children {
//     display: flex;
//     flex-wrap: wrap;
// }
// .family::before, .family::after{
// 	content: '';
// 	position: absolute; top: 0; right: 50%;
// 	border-top: 1px solid black;
// 	width: 50%; height: 50px;
// }
// .family::after{
// 	right: auto; left: 50%;
// 	border-left: 1px solid black;
// }

// .family:only-child::after, .family:only-child::before {
// 	display: none;
// }
// .family:only-child{ 
//     padding-top: 0;
// }

// .family:first-child::before, .family:last-child::after{
// 	border: 0 none;
// }

// .family:last-child::before{
// 	border-right: 1px solid black;
// 	border-radius: 0 5px 0 0;
// 	-webkit-border-radius: 0 5px 0 0;
// 	-moz-border-radius: 0 5px 0 0;
// }

// .family:first-child::after{
// 	border-radius: 5px 0 0 0;
// 	-webkit-border-radius: 5px 0 0 0;
// 	-moz-border-radius: 5px 0 0 0;
// }
