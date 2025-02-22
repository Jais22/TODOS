import todo from "../Assets/todo.webp"
import TaskList from './TaskList'

import { useTodoContext } from '../todoContext/todoContexts'

const TodoList = () => {
      const {activity, setActivity,update,handleUpdate}=useTodoContext()

    return (
        <>
            <div>
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className='w-[80%] mx-auto flex flex-wrap'>
                            <div className='lg:w-1/2'>
                                <img alt='e-com' src={todo} width={300} height={300} className='w-full lg:h-auto h-64 object-cover object-center rounded' />

                            </div>
                            <div className='lg:w-[40%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
                                <h2 className='text-gray-900 font-bold mb-5 text-center text-5xl'>Todo</h2>
                                <div className='mb-4'>
                                    <input
                                        type='text'
                                        value={activity}
                                        onChange={(e) => setActivity(e.target.value)}
                                        className='w-full bg-white rounded-border border-gray-300 focus:border-indigo-500 focus:ring-2
                            foucs:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
                            duration-200 ease-in-out'/>
                                </div>

                                {
                                    update ?
                                        <button className='text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={handleUpdate}>
                                            Add
                                        </button>
                                        :
                                        <button className='text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={handleUpdate}>
                                            Update
                                        </button>
                                }


                                <TaskList/>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default TodoList