const ValidateID = (id: string): boolean => {
    // 숫자로만 구성되어 있는지 확인
    const isValidNumber = /^\d+$/.test(id);

    // 범위가 1부터 10까지인지 확인
    const parsedID = parseInt(id, 10);
    const isInRange = parsedID >= 1 && parsedID <= 10;

    return isValidNumber && isInRange;
};

export { ValidateID };
