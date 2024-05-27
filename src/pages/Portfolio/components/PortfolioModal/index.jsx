import { Dialog,  DialogTitle, Description } from '@headlessui/react';

function PortfolioModal({ item, onClose }) {
    return (
        <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <div className="bg-white rounded-lg p-8 max-w-lg mx-auto">
                <DialogTitle className="text-3xl font-bold text-indigo-950 mb-4">{item.title}</DialogTitle>
                <Description className="text-gray-600 mb-4">{item.description}</Description>
                <button onClick={onClose} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800 transition">
                    Close
                </button>
            </div>
        </Dialog>
    );
}

export default PortfolioModal;
