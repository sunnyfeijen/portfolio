export default (context, inject) => {
    inject('getAge', function(el) {
        const today = new Date;
        const birthDate = new Date('05-11-1993');
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    });
}