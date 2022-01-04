const validation = {
    EMAIL: '^[\\w\\d._+-]+@[\\w\\d_-]+\\.[\\w\\d._-]+$',
    PASSWORD: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,32}$'
};
export default validation;