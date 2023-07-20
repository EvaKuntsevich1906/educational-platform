const  registration = async (): Promise <iCourse> => {
    const data = await registrationDB();
    if (!data) throw new Error("В базе данных отсутствует информация о курсах");
    return data
};

export {registration}
