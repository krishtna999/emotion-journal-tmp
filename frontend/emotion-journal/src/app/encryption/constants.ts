export class constants {

    public static FIELDS_TO_ENCRYPT = [
        'text', 'name', 'type'
    ];

    public static NO_SYMBOL_ENCRPYT = {
        // Split by given symbols and encrypt
        /* NOTE: The order of items in the array is very important.
            This is how the string will be split. 
            DO NOT CHANGE THE ORDER unless you know what you're doing */
        'tags': [ ',',':'],
    };

    public static FIELDS_TO_DECRYPT = constants.FIELDS_TO_ENCRYPT.concat([
        'values',
    ]);
}