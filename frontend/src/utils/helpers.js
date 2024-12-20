// Purpose: Provide reusable helper functions
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
};

// To develop further: Add utility functions for data formatting and validation.
