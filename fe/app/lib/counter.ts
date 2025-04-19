export default function handleCouter(number: number, counter: number, endNumber: number) {

    if (number < endNumber) {

        setTimeout(() => {
            return +(number + counter);
        }, 500);
    }

    return 0;
}