export const formatTime = (time) => {
    return [
        new Date(time).toLocaleDateString("sv"),
        new Date(time).toLocaleTimeString("sv"),
    ];
};
