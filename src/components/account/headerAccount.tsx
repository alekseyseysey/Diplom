import React from "react";
import "../../styles/main.scss";
import { useForm, Controller, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonGroup, TextField, Typography, Box, FormHelperText } from "@mui/material";
// import {Typography} from "@emotion/react"

interface ICredentials {
  loginValue: string;
  passwordValue: string;
}

const schemaLoginValidation = yup.object().shape({
  loginValue: yup.string().nullable().email().required("Required Email"),
  passwordValue: yup.string().nullable().min(5).required("Error"),
});

const LoginPage = (props): JSX.Element => {
  const formMethods = useForm<ICredentials>({
    defaultValues: {
      loginValue: '',
      passwordValue: '',
    },
    resolver: yupResolver(schemaLoginValidation),
    mode: "onSubmit",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethods;

  const submit = (values: ICredentials) => {
  };

  return (
    <form className="formLogin" onSubmit={handleSubmit(submit)} action="">
      <FormProvider  {...formMethods}>
        <Box flex='flex' flexDirection={"column"} width="300px" height={"400px"}>
      <Typography variant="h1" component="h3" >
                    Login
                </Typography>
                <Box mt={4}>
        <Controller
          control={control}
          name="loginValue"
          render={({ field, fieldState:{error} }) => 
          <>
          <TextField 
          {...field}
          label = "Email"
          type = "email"
          error={!!error}
          
          />
          {!!error && (<FormHelperText error>{errors['loginValue']?.message}</FormHelperText>)}
          </>
          }
        />
        </Box>
        <Box mt={2}>
        <Controller
          control={control}
          name="passwordValue"
          render={({ field, fieldState:{error}}) => 
          <>
          <TextField 
          {...field}
          label = "Password"
          type = "password"
          error={!!error}
          />
          {!!error && (<FormHelperText error>{errors['passwordValue']?.message}</FormHelperText>)}

          </>}
        />
        </Box>


        <Box mt={2} display={'flex'} flexWrap='nowrap'>
          <Box  mr={2}>
      <Button variant="contained" type = 'submit'>Sign In</Button>
      </Box>
      <Box>
      <Button variant="outlined">Reset</Button>
      </Box>
      </Box>
      </Box>
      </FormProvider>

    </form>
  );
};

export default LoginPage;
