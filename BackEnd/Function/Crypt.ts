import bcrypt from 'bcryptjs';

    const hash = (str: string) => {
        let salt = bcrypt.genSaltSync(15);
        let hash = bcrypt.hashSync(str, salt);
        return hash;
    };
    
    const hashCheck = (str: string, hash: string): boolean => {
        return bcrypt.compareSync(str, hash);
    };

export {hash, hashCheck}