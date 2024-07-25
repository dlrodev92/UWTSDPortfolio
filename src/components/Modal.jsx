import { motion} from 'framer-motion';

export default function Modal() {
  return (
      <motion.div
        className="fixed top- left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"
        key="modal"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white flex flex-col items-center w-[95%] md:w-[80%] md:h-[80%] h-[95%] p-4 rounded-[25px] lg:rounded-[45px] absolute overflow-y-scroll scrollbar-hide gap-5">
          <h1 className='lg:text-[4rem] text-[3rem] font-Jost relative border-b-8 border-blueBackground text-center'>
            Title
          </h1>
          <img src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" alt='project image' className='w-[100%] lg:w-[50%]'/>
          <div className='w-full bg-slate-200 flex flex-col justify-start md:justify-center items-center rounded-lg p-3'>
            <h2 className='lg:text-[3rem] text-[2rem] font-Jost border-b-8 border-blueBackground text-center mb-5'>
              Project Overview
            </h2>
            <button className="text-white bg-blue-500 px-4 py-2 rounded-lg mt-4 gap-4">See the Site</button>
            <div className='w-full flex flex-col md:items-center'>
              <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold'>
                Challenge
              </h3>
              <p className='text-[1rem] font-Jost'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus alias dolorem, quis doloremque culpa beatae, quas ipsam optio facilis nesciunt officiis deserunt voluptatum repudiandae dolorum eius quidem architecto rem debitis quod. Blanditiis ad reprehenderit expedita nesciunt laudantium accusamus corrupti, quidem vitae consequatur dignissimos dolore eum magni quae rerum. Ullam praesentium labore, repellat quam nihil soluta natus repellendus quisquam, sequi aspernatur suscipit illo. Exercitationem, omnis pariatur? Obcaecati consequatur officia nemo molestiae eos aliquam corporis aliquid voluptas! Accusantium eligendi placeat corporis. Quam dolores ex facere repellat. Vel architecto doloremque reiciendis voluptas accusantium ipsa impedit. Quam neque vel voluptate ipsam temporibus exercitationem provident, cupiditate ad! In expedita sunt ad dignissimos totam quia veniam exercitationem aperiam eaque consequatur ipsam reiciendis, iste necessitatibus quas saepe quo magnam fugit sequi unde, delectus tenetur! Totam amet tenetur inventore  Dignissimos, modi.
              </p>
              <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold mt-5'>
                Objectives
              </h3>
              <ul className='list-disc'>
                <li className='text-[1.2rem] font-Jost underline ml-5'>peewrwerwefsdfdsf</li>
                <li className='text-[1.2rem] font-Jost underline ml-5'>peewrwerwefsdfdsf</li>
                <li className='text-[1.2rem] font-Jost underline ml-5'>peewrwerwefsdfdsf</li>
              </ul>
              <div className='mt-11 w-full flex'>
                <ul className='w-full md:grid md:grid-cols-4 md:grid-rows-4'>
                  <h4 className='lg:text-[1.8rem] text-[1.2rem] font-Jost font-bold col-start-2 col-span-1 row-start-1 row-span-1 '>Stack</h4>
                  <li className='text-[1.2rem] font-Jost col-start-1 col-span-2 row-start-2 row-span-1 ml-[25%]'>fernando</li>
                  <h4 className='lg:text-[1.8rem] text-[1.2rem] font-Jost font-bold col-start-2 col-span-1 row-start-3 row-span-1 '>Role</h4>
                  <li className='text-[1.2rem] font-Jost col-start-1 col-span-2 row-start-4 row-span-1 ml-[25%]'>pepero</li>
                  <h4 className='lg:text-[1.8rem] text-[1.2rem] font-Jost font-bold col-start-4 col-span-1 row-start-1 row-span-1'>Team</h4>
                  <li className='text-[1.2rem] font-Jost col-start-3 col-span-2 row-start-2 row-span-1 ml-[25%]'>putellas</li>
                  <h4 className='lg:text-[1.8rem] text-[1.2rem] font-Jost font-bold col-start-4 col-span-1 row-start-3 row-span-1'>Duration</h4>
                  <li className='text-[1.2rem] font-Jost col-start-3 col-span-2 row-start-4 row-span-1 '>forofo</li>
                </ul>
              </div>
            </div>
            
            <button
            className="text-white bg-blue-500 px-4 py-2 rounded-lg mt-4"
          >
            Close
          </button>
          </div>
        </div>
      </motion.div>
  );
}