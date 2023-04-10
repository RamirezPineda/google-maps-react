import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function AddModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded px-4 py-2 bg-sky-500 text-gray-300"
      >
        Show modal
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-[#1E1F25]  p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-[#d1d5db]"
                  >
                    Add product
                  </Dialog.Title>

                  <Dialog.Description as="div" className="mt-3">
                    <form
                      className="flex flex-col gap-4 "
                      encType="multipart/form-data"
                    >
                      <div className="relative ">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="w-full text-[#d1d5db] py-2 px-10 rounded-md outline-none bg-[#131517]"
                          placeholder="Ingresa el nombre"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full bg-blue-600 py-2 px-4 text-[#d1d5db] rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </Dialog.Description>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default AddModal;
