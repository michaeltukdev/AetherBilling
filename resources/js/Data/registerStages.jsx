export const registerStages = [
    {
        title: "Your Information",
        description: "To get started with our platform please fill out all the required information",
        fields: [
            { name: "forename", label: "Forename", required: true },
            { name: "surname", label: "Surname", required: true },
            { name: "email", label: "Email Address", required: true },
            { name: "phoneNumber", label: "Phone Number", required: false },
        ],
    },
    {
        title: "Security",
        description: "Create a secure password for your account",
        fields: [
            { name: "password", label: "Password", required: true, type: "password" },
            { name: "password_confirmation", label: "Confirm Password", required: true, type: "password" },
        ],
    },
    {
        title: "Billing Address",
        description: "Please provide your billing address",
        fields: [
            { name: "addressLine1", label: "Address Line 1", required: true },
            { name: "addressLine2", label: "Address Line 2", required: false },
            { name: "city", label: "City", required: true },
            { name: "state", label: "State/Province", required: true },
            { name: "postalCode", label: "Postal Code", required: true },
            { name: "country", label: "Country", required: true },
        ],
    },
];