export function diffDay(date="2023-10-14") {
    const masTime = new Date(date);
    const todayTime = new Date();
    const diff = masTime - todayTime;
    return Math.floor(diff / (1000*60*60*24));
}