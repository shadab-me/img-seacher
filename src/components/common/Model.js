const Modal = ({ imageUrl, setModal }) => {
  return !imageUrl ? null : (
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-right">
                <i
                  className="text-2xl text-blue-400 ml-1 cursor-pointer"
                  onClick={() => setModal(null)}
                >
                  Close
                </i>
                <img
                  src={imageUrl}
                  class="text-lg h-full w-full leading-6 font-medium text-gray-900"
                  id="modal-title"
                  alt={imageUrl}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
