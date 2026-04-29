
import Link from 'next/link';

const Home = () =>{
  return (
    <div className="flex min-h-screen items-center justify-center">
     
      Click <Link href="/documents"><span className='text-blue-900 underline'>here</span></Link> to go to documents
    </div>
  );
}

export default Home;