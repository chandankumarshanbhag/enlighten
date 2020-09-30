export default function ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    resetForm
}) {
    return {
        "Student Info": [
            {
                grid: { md: 3 },
                component: <TextField
                    type="text"
                    name="text"
                    label="Application No."
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email && touched.email}
                    helperText={errors.email}
                />
            },
            {
                grid: { md: 3 },
                component: <TextField
                    type="text"
                    name="text"
                    label="Application No."
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email && touched.email}
                    helperText={errors.email}
                />
            }
        ]
    };
}