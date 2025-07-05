import wisdom from './assets/wisdom.png'

function App() {
  return (
    <div className='bg-teal-400 min-h-screen flex items-center justify-center flex-col gap-4 text-center p-4'>
        <div class="w-32 h-32 overflow-hidden rounded-full">
          <img src={wisdom} alt="profile picture of wisdom" className='object-cover w-full h-full'/>
        </div>
        <h1 className='text-6xl uppercase font-extrabold'>Wisdom Aireguamen</h1>
        <p>Full stack web developer, youtuber, Jesus is king</p>
        <div className='border-2 p-8 bg-cyan-500'>
          <p className='pb-5'>
            Right now, I am 27 years old and I live in Lagos, Nigeria
          </p>
          <p>
            Right now I am learning React and Tailwind CSS. I am also working on a project that uses these technologies to build a 
            <br />responsive web application. I am excited to see how these tools can help me create beautiful and functional user interfaces.
          </p>
      </div>
    </div>
  )
}

export default App
