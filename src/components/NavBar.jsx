export default function NavBar() {
    return(
        <div className="align-middle  items-center  ">

            <nav className='flex  p-5  align-middle justify-center  '>
                
                <h1 className="px-5">Introduction</h1>
                <h1 className="px-5">About Me</h1>
                <h1 onClick = {(e)=>{
   e.preventDefault();
   window.scrollTo({
   top: document.querySelector("#projects").offsetTop,
   behavior: "smooth",
});}} className="px-5">Projects</h1>

            
            </nav>
        </div>
    );
}