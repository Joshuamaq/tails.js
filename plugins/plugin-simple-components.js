import { addPlugin } from "../tails.js";

// Simple Components Plugin - Reusable UI components using utility classes
addPlugin({
    components: {        // ========================================
        // BUTTONS
        // ========================================
        
        // Base button component
        "btn": "inline-flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 rounded-md border border-transparent cursor-pointer transition-all duration-150 ease-in-out no-underline select-none",
        
        // Primary button
        "btn-primary": "bg-theme-primary text-white border-theme-primary hover:bg-theme-primary hover:border-theme-primary focus:outline-none focus:ring-3 focus:ring-theme-primary active:bg-theme-primary active:border-theme-primary",
        
        // Secondary button  
        "btn-secondary": "bg-theme-secondary text-white border-theme-secondary hover:bg-theme-secondary hover:border-theme-secondary focus:outline-none focus:ring-3 focus:ring-theme-secondary",
        
        // Success button
        "btn-success": "bg-theme-success text-white border-theme-success hover:bg-theme-success hover:border-theme-success focus:outline-none focus:ring-3 focus:ring-theme-success",
        
        // Danger button
        "btn-danger": "bg-theme-error text-white border-theme-error hover:bg-theme-error hover:border-theme-error focus:outline-none focus:ring-3 focus:ring-theme-error",
        
        // Outline button
        "btn-outline": "bg-transparent text-theme-neutral border-theme-neutral hover:bg-theme-secondary hover:text-theme-neutral focus:outline-none focus:ring-3 focus:ring-theme-neutral",
        
        // Ghost button
        "btn-ghost": "bg-transparent text-theme-secondary border-transparent hover:bg-theme-secondary hover:text-theme-secondary",
        
        // Button sizes
        "btn-xs": "px-2 py-1 text-xs",
        "btn-sm": "px-3 py-1.5 text-xs", 
        "btn-lg": "px-6 py-3 text-base",
        "btn-xl": "px-8 py-4 text-lg",
        
        // ========================================
        // FORM ELEMENTS
        // ========================================
        
        // Base input component
        "input": "block w-full px-3 py-2 text-theme-neutral bg-theme-bg-primary border-theme-neutral rounded-md transition-colors duration-150 ease-in-out focus:outline-none focus:border-theme-primary focus:ring-3 focus:ring-theme-primary disabled:bg-theme-bg-secondary disabled:text-theme-neutral disabled:cursor-not-allowed",
        
        // Input variants
        "input-error": "border-red-500 focus:border-red-500 focus:ring-red-100",
        "input-success": "border-green-500 focus:border-green-500 focus:ring-green-100",
        
        // Textarea component
        "textarea": "block w-full px-3 py-2 text-theme-neutral bg-theme-bg-primary border-theme-neutral rounded-md resize-vertical min-h-10 transition-colors duration-150 ease-in-out focus:outline-none focus:border-theme-primary focus:ring-3 focus:ring-theme-primary",
        
        // Select component
        "select": "block w-full px-3 py-2 text-theme-neutral bg-theme-bg-primary border-theme-neutral rounded-md transition-colors duration-150 ease-in-out focus:outline-none focus:border-theme-primary focus:ring-3 focus:ring-theme-primary",
        
        // Form helpers
        "form-group": "mb-4",
        "label": "block text-sm font-medium text-gray-700 mb-1",
        "help-text": "text-xs text-gray-600 mt-1",
        "error-text": "text-xs text-red-500 mt-1",
        
        // ========================================
        // CARDS
        // ========================================
        
        "card": "bg-theme-bg-primary rounded-lg shadow-sm overflow-hidden",
        "card-header": "px-6 py-4 border-b border-theme-neutral",
        "card-body": "px-6 py-4",
        "card-footer": "px-6 py-4 bg-theme-bg-secondary border-t border-theme-neutral",
        "card-title": "text-lg font-semibold text-theme-neutral mb-2",
        "card-subtitle": "text-sm text-theme-neutral mb-4",
        
        // ========================================
        // TABLES
        // ========================================
        
        "table": "w-full border-collapse text-sm",
        "table-responsive": "overflow-x-auto rounded-lg shadow-sm",
        
        // ========================================
        // BADGES
        // ========================================
        
        "badge": "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded",
        "badge-primary": "bg-theme-primary text-theme-bg-primary",
        "badge-secondary": "bg-theme-secondary text-theme-bg-primary", 
        "badge-success": "bg-theme-success text-theme-bg-primary",
        "badge-warning": "bg-theme-warning text-theme-bg-primary",
        "badge-danger": "bg-theme-error text-theme-bg-primary",
        "badge-info": "bg-theme-info text-theme-bg-primary",
        
        // ========================================
        // ALERTS
        // ========================================
        
        "alert": "p-4 rounded-md border",
        "alert-primary": "bg-theme-primary border-theme-primary text-theme-bg-primary",
        "alert-success": "bg-theme-success border-theme-success text-theme-bg-primary",
        "alert-info": "bg-theme-info border-theme-info text-theme-bg-primary", 
        "alert-warning": "bg-theme-warning border-theme-warning text-theme-bg-primary",
        "alert-danger": "bg-theme-error border-theme-error text-theme-bg-primary",
        
        // ========================================
        // PROGRESS BARS
        // ========================================
        
        "progress": "w-full h-2 bg-gray-200 rounded overflow-hidden",
        "progress-bar": "h-full bg-theme-primary transition-all duration-300 ease-out",
        "progress-bar-success": "bg-theme-success",
        "progress-bar-warning": "bg-theme-warning", 
        "progress-bar-danger": "bg-theme-error",
        "progress-lg": "h-4",
        "progress-sm": "h-1",
        
        // ========================================
        // UTILITY COMPONENTS  
        // ========================================
        
        "avatar": "inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full overflow-hidden",
        "avatar-xs": "w-6 h-6",
        "avatar-sm": "w-8 h-8", 
        "avatar-lg": "w-12 h-12",
        "avatar-xl": "w-16 h-16",
        
        "divider": "border-none h-px bg-gray-200 my-4",
        
        "spinner": "inline-block w-4 h-4 border-2 border-theme-neutral border-t-theme-primary rounded-full animate-spin",
        "spinner-sm": "w-3 h-3",
        "spinner-lg": "w-6 h-6",
        
        "tooltip": "relative inline-block",
        
        // ========================================
        // MODALS
        // ========================================
        
        "modal": "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        "modal-content": "bg-white rounded-lg p-6 max-w-lg w-11/12 max-h-5/6 overflow-y-auto",
        "modal-header": "flex items-center justify-between mb-4",
        "modal-title": "text-xl font-semibold text-gray-900",
        "modal-close": "bg-none border-none text-xl cursor-pointer text-gray-500 p-0 w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 hover:text-gray-700",
        "modal-body": "mb-4",
        "modal-footer": "flex gap-2 justify-end"
    }
});
