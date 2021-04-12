const increaseNumber = (startNumber, numberToIncrementWith, setStartNumber, timeoutInMs, maxNumberToIncrementTo) => {
    const updatedNumber = startNumber + numberToIncrementWith;

    const timeout = setTimeout(
        () => setStartNumber(updatedNumber),
        timeoutInMs,
    );

    if (updatedNumber > maxNumberToIncrementTo) {
        return clearTimeout(timeout);
    }
};

export {
    increaseNumber,
}
