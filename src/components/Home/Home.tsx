import * as React from 'react';
import './Home.sass';

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHome {}

// eslint-disable-next-line no-empty-pattern
const Home: React.FC<IHome> = ({}) => {
  return <div>HOME</div>;
};

export default Home;
