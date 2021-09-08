export default (context, inject) => {
    inject('getAge', function(el) {
        const today = new Date;
        const birthDate = new Date('1993-05-11T12:00:00');
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    });
}