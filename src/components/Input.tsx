import React from "react"
import "./../styles/css/input.css"
import { inputPropsType } from "./../types/quiz_types"
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core"

const Input: React.FC<inputPropsType> = ({
  questions,
  category,
  setSendRequest,
  setCategory,
  setQuestions,
  level,
  setLevel,
  name,
  setName,
}) => {
  return (
    <div className="input-container">
      <h1>Quiz Settings</h1>
      <form
        className="question-form"
        action=""
        onSubmit={(e: React.FormEvent<EventTarget>) => {
          e.preventDefault()
          setSendRequest(true)
        }}
      >
        <FormControl className="form-control" variant="outlined" fullWidth>
          <TextField
            className="form-text-field"
            required
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <div className="questions-dropdown">
          <FormControl className="form-control" variant="outlined" fullWidth>
            <InputLabel
              aria-label="category-label"
              className="form-label"
              id="demo-simple-select-outlined-label-category"
            >
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label-category"
              id="demo-simple-select-outlined-category"
              value={category}
              defaultValue={category}
              onChange={(event) => setCategory(Number(event.target.value))}
              required
              label="Category"
            >
              <MenuItem className="form-menu-item" value={9}>
                General Knowledge
              </MenuItem>
              <MenuItem className="form-menu-item" value={11}>
                Movies
              </MenuItem>
              <MenuItem className="form-menu-item" value={17}>
                Science
              </MenuItem>
              <MenuItem className="form-menu-item" value={18}>
                Computers
              </MenuItem>
              <MenuItem className="form-menu-item" value={19}>
                Mathematics
              </MenuItem>
              <MenuItem className="form-menu-item" value={21}>
                Sports
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="questions-dropdown">
          <FormControl className="form-control" variant="outlined" fullWidth>
            <InputLabel
              className="form-label"
              id="demo-simple-select-outlined-label-questions"
            >
              Questions
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label-questions"
              id="demo-simple-select-outlined-questions"
              value={questions}
              onChange={(event) => setQuestions(Number(event.target.value))}
              required
              label="Questions"
            >
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={15}>Fifteen</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="questions-dropdown">
          <FormControl className="form-control" variant="outlined" fullWidth>
            <InputLabel
              className="form-label"
              id="demo-simple-select-outlined-label-difficulty"
            >
              Difficulty
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label-difficulty"
              id="demo-simple-select-outlined-difficulty"
              value={level}
              onChange={(event) => setLevel(event.target.value as string)}
              required
              label="Questions"
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          </FormControl>
        </div>
        <input className="submit-btn" value="Start Quiz" type="submit" />
      </form>
    </div>
  )
}

export default Input