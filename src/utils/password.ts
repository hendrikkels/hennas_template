import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // const hashedPassword = password;
    return hashedPassword;
}

export const validatePassword = async (password: string, hashedPassword: string) => {
    // return password == hashedPassword;
    return await bcrypt.compare(password, hashedPassword);
}
