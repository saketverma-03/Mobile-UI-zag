import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <main className="flex flex-col items-center">
        <div className="p-4 pb-0 pt-6 w-screen max-w-[1440px] h-full ">
          {children}
        </div>
      </main>
    </>
  );
}

// function Layout({ children }: Props) {
//   return (
//     <>
//       <main className="flex flex-col items-center">
//         <div className="p-4 pt-10 w-screen max-w-[1440px] h-full ">
//           <div className="flex">
//             <h1 className="flex-1 text-4xl font-bold">Discover</h1>
//             <img src={bellIcon} alt="" />
//           </div>
//           {children}
//         </div>
//       </main>

//     </>
//   );
// }

export default Layout;
