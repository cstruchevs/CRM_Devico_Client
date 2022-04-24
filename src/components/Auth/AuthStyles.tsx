import {
  Button,
  DialogTitle,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

export const StyledButton = styled(Button)({
  margin: "10px",
  height: "40px",
  borderRadius: "0px",
  fontSize: "13px",
});

export const ConfirmStyledButton = styled(Button)({
  margin: "auto",
  width: "80%",
  backgroundColor: "#6A6968",
  color: "#fff",
  height: "33px",
  borderRadius: "0px",
  border: "1px solid black",
  fontSize: "13px",
  "&:hover": {
    backgroundColor: "#6A6968",
    color: "black",
    border: "1px solid black",
  },
  "&:disabled": {
    color: "#d7d2d2",
  },
});

export const StyledStackDescription = styled(Stack)({
  marginTop: "15px",
  paddingLeft: "10px",
  alignItems: "center",
  paddingBottom: "4px",
});

export const StyledTypography = styled(Typography)({
  paddingLeft: "10px",
  letterSpacing: "2px",
  fontSize: "13px",
});

export const StyledDialogTitle = styled(DialogTitle)({
  margin: "auto",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "30px",
});

export const StyledTextField = styled(TextField)({
  padding: "4px 10px 10px 10px",
  borderRadius: "0px",
  " fieldSet": {
    borderRadius: "0px",
  },
  " input": {
    height: "3px",
  },
});

export const StyledTypographyHandler = styled(Typography)({
  display: "inline",
  textDecoration: "underline",
  "&:hover": {
    cursor: "pointer",
  },
});
