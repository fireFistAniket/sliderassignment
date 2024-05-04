import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import {
  Box,
  Button,
  ButtonProps,
  Link,
  Slider,
  Typography,
} from "@mui/material";

function App() {
  const [sliderValue, setSliderValue] = React.useState(1200);
  const [creditedValue, setCreditedValue] = React.useState(10);
  const [showTopup, setShowTopup] = React.useState(true);
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 43, 
    height: 26, 
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff", 
        "& + .MuiSwitch-track": {
          backgroundColor: "#25ae9d",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22, 
      height: 22, 
      backgroundColor: "#fff",
    },
    "& .MuiSwitch-track": {
      borderRadius: 13, 
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const marks = [
    {
      value: 5,
      label: "$5",
      credits: "500 credits",
    },
    {
      value: 10,
      label: "$10",
      credits: "1200 credits",
    },
    {
      value: 15,
      label: "$15",
      credits: "1700 credits",
    },
    {
      value: 20,
      label: "$20",
      credits: "2500 credits",
    },
    {
      value: 25,
      label: "$25",
      credits: "3900 credits",
    },
    {
      value: 30,
      label: "$30",
      credits: "5000 credits",
    },
  ];

  function valuetext(value: number) {
    return `$${value}`;
  }

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#9747ff"),
    textTransform: "none",
    fontSize: "1vmax",
    alignSelf: "flex-start",
    backgroundColor: "#9747ff",
    "&:hover": {
      backgroundColor: "#9747ff",
    },
  }));

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      if (newValue === 5) {
        setCreditedValue(5);
        setSliderValue(500);
      } else if (newValue === 10) {
        setCreditedValue(10);
        setSliderValue(1200);
      } else if (newValue === 15) {
        setCreditedValue(15);
        setSliderValue(1700);
      } else if (newValue === 20) {
        setCreditedValue(20);
        setSliderValue(2500);
      } else if (newValue === 25) {
        setCreditedValue(25);
        setSliderValue(3900);
      } else if (newValue === 30) {
        setCreditedValue(30);
        setSliderValue(5000);
      }
    }
  };

  const label = { inputProps: { "aria-label": "Top-up Switch" } };
  return (
    <>
      <main className="mainBody">
        <div className="sliderBody">
          <div className="autoPaymentBox">
            <div className="switchBox">
              <Typography component="h2" fontSize={"1.5vmax"} fontWeight={700}>
                Setup Auto Top-up
              </Typography>
              <IOSSwitch
                {...label}
                checked={showTopup}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setShowTopup(event.target.checked)
                }
              />
            </div>
            {showTopup ? (
              <Typography component="p" fontSize={"1vmax"} color={"#7b7b7b"}>
                Once the credit goes below a minimum threshold{" "}
                <Typography
                  component={"span"}
                  fontSize={"1vmax"}
                  color={"#9747ff"}
                  fontWeight={"700"}
                >
                  50
                </Typography>
                , we will auto-purchase{" "}
                <Typography
                  component={"span"}
                  fontSize={"1vmax"}
                  color={"#9747ff"}
                  fontWeight={"700"}
                >
                  {sliderValue}
                </Typography>{" "}
                credits and add them to your account.{" "}
                <Link
                  href="#"
                  underline="always"
                  fontSize={"1vmax"}
                  color={"#7b7b7b"}
                  fontWeight={"700"}
                >
                  Learn More
                </Link>
              </Typography>
            ) : (
              <Typography component="p" fontSize={"1vmax"} color={"#7b7b7b"}>
                Please turn on Auto Top-up for continue using.{" "}
                <Link
                  href="#"
                  underline="always"
                  fontSize={"1vmax"}
                  color={"#7b7b7b"}
                  fontWeight={"700"}
                >
                  Learn More
                </Link>
              </Typography>
            )}
          </div>
          {showTopup && (
            <>
              <div className="sliderBox">
                <Slider
                  aria-label="Custom marks"
                  value={creditedValue}
                  getAriaValueText={valuetext}
                  step={5}
                  min={5}
                  max={30}
                  onChange={handleSliderChange}
                  sx={{
                    height: 8,
                    "& .MuiSlider-thumb": {
                      height: 24,
                      width: 24,
                      border: "5px solid #9747ff",
                      backgroundColor: "#fff",
                      "&:hover": {
                        boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
                      },
                    },
                    "& .MuiSlider-track": {
                      border: "none",
                      backgroundColor: "#9747ff",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#e4e7ec",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  {marks.map((item, index) => (
                    <div key={index}>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: "0.9vmax",
                          color: "#000",
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          cursor: "pointer",
                          fontSize: "1vmax",
                          color: "#9c9c9c",
                        }}
                        key={index}
                      >
                        {item.credits}
                      </Typography>
                    </div>
                  ))}
                </Box>
              </div>
              <ColorButton
                variant="contained"
                onClick={() =>
                  console.log(`Credited amount is $${creditedValue}`)
                }
              >
                Confirm auto-purchase
              </ColorButton>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
