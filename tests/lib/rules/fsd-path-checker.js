/**
 * @fileoverview path checker
 * @author adelkkaa
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/fsd-path-checker"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
});
ruleTester.run("fsd-path-checker", rule, {
  valid: [
    {
      filename:
        "C:/Users/tim/Desktop/javascript/production_project/src/entities/Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'",
      errors: [],
    },
  ],

  invalid: [
    {
      filename:
        "C:/Users/tim/Desktop/javascript/production_project/src/entities/Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article/model/slices/addCommentFormSlice'",
      output: "import { addCommentFormActions, addCommentFormReducer } from './model/slices/addCommentFormSlice'",
      
      errors: [
        {
          message: "В рамках одного слайса все пути должны быть относительными",
        },
      ],
      options: [
        {
          alias: "@",
        },
      ],
    },
    {
      filename:
        "C:/Users/tim/Desktop/javascript/production_project/src/entities/Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from 'entities/Article/model/slices/addCommentFormSlice'",
      output: "import { addCommentFormActions, addCommentFormReducer } from './model/slices/addCommentFormSlice'",
      errors: [
        {
          message: "В рамках одного слайса все пути должны быть относительными",
        },
      ],
    },
  ],
});
