import ThemeProvider from './ThemeProvider';

interface ModalProp {
  children: any;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProp) => {
  return (
    <div className="h-full w-full ">
      <div className="z-[9999] h-[600px] w-full md:!w-[420px] absolute bottom-0 lg:bottom-28  right-0 lg:right-32 !px-6 pt-10 bg-[#f5f5f5] dark:bg-[#272727] border border-black dark:border-white md:rounded-3xl ">
        {/* modal header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-xl md:text-3xl text-black dark:text-white">
              JDGEN{' '}
            </h3>
            <p className="text-sm text-black dark:text-white/70 -mt-1">
              AI job description generator.{' '}
            </p>
          </div>

          <div>
            <ThemeProvider />
          </div>
        </div>

        {/* modal body */}
        <div className="mt-8 h-3/4 z-50">{children}</div>

        <div className="text-black dark:text-gray-100 absolute -bottom-6">
          <p className="text-xs">
            Powered by{' '}
            <a
              href="https://www.renaissancelabs.org/"
              className="font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Renaissance Innovation Labs
            </a>{' '}
          </p>
        </div>
      </div>

      <div
        onClick={onClose}
        className="z-[998] bg-white/30 dark:bg-black/30 h-full w-full fixed top-0 bottom-0 left-0 "
      ></div>
    </div>
  );
};

export default Modal;
