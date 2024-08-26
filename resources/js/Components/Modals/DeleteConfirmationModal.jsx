import React from "react"
import { motion } from "framer-motion"
import { useFloating, useInteractions, useDismiss, useRole, useClick, FloatingOverlay, FloatingFocusManager } from '@floating-ui/react'
import Button from "../ui/Buttons/Button"

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, itemName, itemType = "item" }) => {
    const { refs, context } = useFloating({
        open: isOpen,
        onOpenChange: onClose,
    })

    const click = useClick(context)
    const dismiss = useDismiss(context)
    const role = useRole(context)

    const { getFloatingProps } = useInteractions([
        click,
        dismiss,
        role,
    ])

    if (!isOpen) return null

    return (
        <FloatingOverlay lockScroll className="z-50">
            <FloatingFocusManager context={context}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.1 }}
                ref={refs.setFloating} {...getFloatingProps()} onClick={onClose} className="fixed inset-0 flex items-center justify-center z-[55] bg-black bg-opacity-40" >
                    <div className="bg-surface rounded-lg p-6 max-w-sm md:max-w-2xl text-wrap shadow-xl">
                        <h2 className="text-lg mb-4">Confirm Deletion</h2>
                        <p className="mb-6 text-text-medium">Are you sure you want to delete the {itemType} "{itemName}"? This action cannot be undone.</p>
                        <div className="flex justify-end space-x-2">
                            <Button onClick={onClose}>
                                Close
                            </Button>
                            
                            <Button onClick={() => { onConfirm(), onClose() }} className="bg-red-500 hover:bg-red-600">
                                Delete
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </FloatingFocusManager>
        </FloatingOverlay>
    )
}

export default DeleteConfirmationModal