(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/src/QA/QAcomponents/AddQuestion.jsx":
/*!****************************************************!*\
  !*** ./client/src/QA/QAcomponents/AddQuestion.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst AddQuestion = ({\n  productId,\n  handleModalClose,\n  openModal\n}) => {\n  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [questionBody, setQuestionBody] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const selectModal = event => {\n    event.stopPropagation();\n    handleModalClose();\n  };\n\n  const regexVerifyEmail = email => {\n    const characterTest = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return characterTest.test(email);\n  };\n\n  const dataFill = event => {\n    event.target.placeholder === 'Example: jack@email.com' ? setEmail(event.target.value) : event.target.placeholder === 'Examples: jackson11!' ? setName(event.target.value) : setQuestionBody(event.target.value);\n  };\n\n  const handleSubmitQuestion = event => {\n    event.preventDefault();\n    regexVerifyEmail(email) ? axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/qa/questions', {\n      body: questionBody,\n      name: name,\n      email: email,\n      product_id: productId\n    }).then(response => {\n      console.log('succesful question post', response.data);\n      handleModalClose();\n    }).catch(err => {\n      console.log(err);\n    }) : null;\n  };\n\n  const QuestionModalForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"question-modals\",\n    onClick: event => selectModal(event)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"question-modal-control\",\n    onClick: event => event.stopPropagation()\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"close-button\",\n    onClick: event => selectModal(event)\n  }, \"\\xD7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"question-modal-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"modal-question-title\"\n  }, document.getElementsByClassName('product-name')[0].innerText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"modal-label\",\n    htmlFor: \"name\"\n  }, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    required: true,\n    className: \"question-email-input\",\n    onChange: event => {\n      dataFill(event);\n    },\n    placeholder: \"Example: jack@email.com\",\n    type: \"email\",\n    name: \"email\",\n    maxLength: \"60\",\n    autoComplete: \"off\",\n    value: email\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"answer-modal-text\"\n  }, \"For authentication reasons, you will not be emailed\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"modal-label\",\n    htmlFor: \"name\"\n  }, \"Nickname:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    required: true,\n    className: \"question-name-input\",\n    onChange: event => {\n      dataFill(event);\n    },\n    placeholder: \"Examples: jackson11!\",\n    type: \"text\",\n    name: \"name\",\n    maxLength: \"60\",\n    autoComplete: \"off\",\n    value: name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"answer-modal-text\"\n  }, \"For privacy reasons, do not use your full name or email address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"modal-label\",\n    htmlFor: \"question\"\n  }, \"Question:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    required: true,\n    className: \"question-ask\",\n    onChange: event => {\n      dataFill(event);\n    },\n    placeholder: \"Enter Question Here...\",\n    type: \"text\",\n    name: \"question\",\n    maxLength: \"1000\",\n    minLength: \"\",\n    autoComplete: \"off\",\n    value: questionBody\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"submit-new-question\",\n    onClick: event => handleSubmitQuestion(event)\n  }, \"Submit Question\"))));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, openModal ? QuestionModalForm : null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddQuestion);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/AddQuestion.jsx?");

/***/ }),

/***/ "./client/src/QA/QAcomponents/AnswerHelpful.jsx":
/*!******************************************************!*\
  !*** ./client/src/QA/QAcomponents/AnswerHelpful.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst AnswerHelpful = ({\n  answerHelpfulness,\n  answerDate,\n  answerId,\n  answerName\n}) => {\n  const [helpfulToggle, setHelpfulToggle] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [reportToggle, setReportToggle] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const convertDate = string => {\n    return new Date(string.substring(0, 10)).toString().substring(0, 10);\n  };\n\n  const handleEventPut = event => {\n    !helpfulToggle && event.target.getAttribute('name') === 'helpful' ? (axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/qa/questions/answer/helpful', {\n      answerId: answerId,\n      type: event.target.getAttribute('name')\n    }).then(response => console.log('+1')).catch(err => console.log(err)), setHelpfulToggle(true)) : !reportToggle && event.target.getAttribute('name') === 'report' ? (axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/qa/questions/answer/helpful', {\n      answerId: answerId,\n      type: event.target.getAttribute('name')\n    }).then(response => console.log('+1')).catch(err => console.log(err)), setReportToggle(true)) : null;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"answer-helpfulness-div\",\n    style: {\n      display: 'inline-flex',\n      flexDirection: 'row',\n      marginLeft: '40px',\n      color: 'GrayText'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"by \", answerName, \", \", convertDate(answerDate)), \"\\xA0Helpful?\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"answer-helpful-button\",\n    name: \"helpful\",\n    disabled: helpfulToggle,\n    onClick: event => {\n      handleEventPut(event);\n    },\n    style: {\n      textDecoration: 'underline',\n      cursor: 'pointer'\n    }\n  }, \"Yes\"), \"\\xA0(\", helpfulToggle ? answerHelpfulness + 1 : answerHelpfulness, \") | \\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"answer-report\",\n    name: \"report\",\n    onClick: event => {\n      handleEventPut(event);\n    },\n    style: {\n      textDecoration: 'underline',\n      cursor: 'pointer'\n    }\n  }, reportToggle ? 'Reported!' : 'Report'));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnswerHelpful);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/AnswerHelpful.jsx?");

/***/ }),

/***/ "./client/src/QA/QAcomponents/AnswerPhotos.jsx":
/*!*****************************************************!*\
  !*** ./client/src/QA/QAcomponents/AnswerPhotos.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst AnswerPhotos = ({\n  photo\n}) => {\n  const [modal, setModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handlePhotoClick = event => {\n    setModal(!modal);\n  };\n\n  const answerPhotoModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"answer-photo-modal\",\n    onClick: handlePhotoClick\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"enlarged-answer-photo-modal\",\n    src: photo,\n    onClick: event => event.stopPropagation()\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"answer-photo-box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"answer-photo\",\n    src: photo,\n    alt: \"product\",\n    onClick: handlePhotoClick\n  }), modal ? answerPhotoModal : null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnswerPhotos);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/AnswerPhotos.jsx?");

/***/ }),

/***/ "./client/src/QA/QAcomponents/Answers.jsx":
/*!************************************************!*\
  !*** ./client/src/QA/QAcomponents/Answers.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AnswerPhotos_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnswerPhotos.jsx */ \"./client/src/QA/QAcomponents/AnswerPhotos.jsx\");\n/* harmony import */ var _AnswerHelpful_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnswerHelpful.jsx */ \"./client/src/QA/QAcomponents/AnswerHelpful.jsx\");\n\n\n\n\nconst Answers = ({\n  answer\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"answer\"\n}, \"A: \", answer.body), answer.photos.length ? answer.photos.map((photo, id) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"answer-photo\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnswerPhotos_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  photo: photo,\n  key: id\n}))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnswerHelpful_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  answerId: answer.id,\n  answerHelpfulness: answer.helpfulness,\n  answerDate: answer.date,\n  answerName: answer.answerer_name\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Answers);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/Answers.jsx?");

/***/ }),

/***/ "./client/src/QA/QAcomponents/MoreAnswers.jsx":
/*!****************************************************!*\
  !*** ./client/src/QA/QAcomponents/MoreAnswers.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Answers_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Answers.jsx */ \"./client/src/QA/QAcomponents/Answers.jsx\");\n\n\n\nconst MoreAnswers = ({\n  answer,\n  answerList\n}) => {\n  const [collapseAnswers, setCollapseAnswers] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, collapseAnswers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"more-answers\",\n    onClick: () => {\n      setCollapseAnswers(!collapseAnswers);\n    }\n  }, \"More Answers\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, answerList.slice(2).map(answer => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Answers_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      answer: answer,\n      key: answer.id\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"more-answers\",\n    onClick: () => {\n      setCollapseAnswers(!collapseAnswers);\n    }\n  }, \"Collapse Answers\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoreAnswers);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/MoreAnswers.jsx?");

/***/ }),

/***/ "./client/src/QA/QAcomponents/MoreQuestions.jsx":
/*!******************************************************!*\
  !*** ./client/src/QA/QAcomponents/MoreQuestions.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Question_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question.jsx */ \"./client/src/QA/QAcomponents/Question.jsx\");\n\n\n\nconst MoreQuestions = ({\n  questions\n}) => {\n  const [collapseQuestions, setCollapseQuestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"more-answered-questions-button\"\n  }, collapseQuestions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"more-questions\",\n    onClick: () => {\n      setCollapseQuestions(!collapseQuestions);\n    }\n  }, \"More Answered Questions\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, questions.slice(4).map(question => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Question_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      question: question,\n      key: question.question_id\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"more-questions\",\n    onClick: () => {\n      setCollapseQuestions(!collapseQuestions);\n    }\n  }, \"Collapse Questions\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoreQuestions);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/MoreQuestions.jsx?");

/***/ }),

/***/ "./client/src/QA/QAcomponents/Question.jsx":
/*!*************************************************!*\
  !*** ./client/src/QA/QAcomponents/Question.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _QuestionHelpful_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionHelpful.jsx */ \"./client/src/QA/QAcomponents/QuestionHelpful.jsx\");\n/* harmony import */ var _Answers_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Answers.jsx */ \"./client/src/QA/QAcomponents/Answers.jsx\");\n/* harmony import */ var _MoreAnswers_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MoreAnswers.jsx */ \"./client/src/QA/QAcomponents/MoreAnswers.jsx\");\n\n\n\n\n\nconst Question = ({\n  question,\n  productId\n}) => {\n  let answerKey = Object.keys(question.answers);\n  let answerList = answerKey.map(Ans => question.answers[Ans]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"question\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"question-control\"\n  }, \"Q: \", question.question_body, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuestionHelpful_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    questionBody: question.question_body,\n    productId: productId,\n    helpfulness: question.question_helpfulness,\n    questionId: question.question_id\n  })), answerList.slice(0, 3).map((answer, count) => count > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MoreAnswers_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    answerList: answerList,\n    answer: answer,\n    key: 0\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Answers_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: answer.id,\n    answer: answer\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/Question.jsx?");

/***/ }),

/***/ "./client/src/QA/QAcomponents/QuestionHelpful.jsx":
/*!********************************************************!*\
  !*** ./client/src/QA/QAcomponents/QuestionHelpful.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst QuestionHelpful = ({\n  questionBody,\n  helpfulness,\n  questionId,\n  productId\n}) => {\n  const [helpfulToggle, setHelpfulToggle] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [addAnswerModal, setAddAnswerModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [answerBody, setAnswerBody] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [images, setImages] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  const handleCloseModal = event => {\n    event.stopPropagation();\n    setAddAnswerModal(false);\n  };\n\n  const regexVerifyEmail = email => {\n    const characterTest = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return characterTest.test(email);\n  };\n\n  const toggleHelpfulQuestion = () => {\n    helpfulToggle ? console.log('already toggled') : axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/question/helpful', {\n      questionId: questionId\n    }).then(() => console.log('+1')).catch(err => console.log(`Err at Marked helpful in Q&A widget ${questionId} ${err}`));\n    setHelpfulToggle(true);\n  };\n\n  const dataFill = event => {\n    event.target.placeholder === 'Example: jack@email.com' ? setEmail(event.target.value) : event.target.placeholder === 'Example: jack543!' ? setName(event.target.value) : setAnswerBody(event.target.value);\n  };\n\n  const addAnswerImg = event => {\n    const photos = [];\n    photos.push(event.target.value);\n    setImages(photos);\n  };\n\n  const handleAddAnswer = event => {\n    event.preventDefault();\n    regexVerifyEmail(email) ? axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/qa/questions/answer', {\n      body: answerBody,\n      name: name,\n      email: email,\n      photos: images,\n      questionId: questionId\n    }).then(response => {\n      console.log('succesful answer post', response.data);\n      setAddAnswerModal(false);\n    }).catch(err => {\n      console.log(err);\n    }) : null;\n  };\n\n  const addAnswerModalBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"answer-modal\",\n    onClick: event => handleCloseModal(event)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"answer-modal-control\",\n    onClick: event => event.stopPropagation()\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"answer-modal-close-x\",\n    onClick: event => handleCloseModal(event)\n  }, \"\\xD7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"modal-question-title\"\n  }, \"Q:\", questionBody), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"answer-modal-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"modal-label\",\n    htmlFor: \"email\"\n  }, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"answer-modal-email\",\n    required: true,\n    placeholder: \"Example: jack@email.com\",\n    value: email,\n    type: \"email\",\n    name: \"email\",\n    maxLength: \"60\",\n    autoComplete: \"off\",\n    onChange: event => {\n      event.preventDefault();\n      dataFill(event);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"answer-modal-text\"\n  }, \"For authentication reasons, you will not be emailed\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"modal-label\",\n    htmlFor: \"name\"\n  }, \"Nickname:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"answer-modal-name\",\n    required: true,\n    placeholder: \"Example: jack543!\",\n    type: \"text\",\n    name: \"name\",\n    maxLength: \"75\",\n    autoComplete: \"off\",\n    value: name,\n    onChange: event => {\n      event.preventDefault();\n      dataFill(event);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"answer-modal-text\"\n  }, \"For privacy reasons, do not use your full name or email address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"modal-label\",\n    htmlFor: \"answer\"\n  }, \"Answer:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    className: \"answer-modal-body\",\n    required: true,\n    placeholder: \"Enter Answer Here...\",\n    type: \"text\",\n    name: \"answer\",\n    maxLength: \"1000\",\n    minLength: \"1\",\n    autoComplete: \"off\",\n    value: answerBody,\n    onChange: event => {\n      event.preventDefault();\n      dataFill(event);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"modal-label\",\n    htmlFor: \"imageUpload\"\n  }, \"Img URL:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"answer-modal-img\",\n    placeholder: \"Image URL...\",\n    type: \"text\",\n    name: \"imageUpload\",\n    value: images,\n    onChange: event => {\n      event.preventDefault();\n      addAnswerImg(event);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"submit-answer-form-button\",\n    onClick: event => handleAddAnswer(event)\n  }, \"Submit Answer\"))));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: 'inline-flex',\n      flexDirection: 'row',\n      fontSize: 15\n    }\n  }, \"Helpful?\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"helpful-button\",\n    disabled: helpfulToggle,\n    onClick: () => toggleHelpfulQuestion(),\n    style: {\n      textDecoration: 'underline',\n      cursor: 'pointer'\n    }\n  }, \"Yes\"), \"\\xA0(\", helpfulToggle ? helpfulness + 1 : helpfulness, \") | \\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"add-answer\",\n    onClick: () => setAddAnswerModal(true),\n    style: {\n      textDecoration: 'underline',\n      cursor: 'pointer'\n    }\n  }, \"Add Answer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, addAnswerModal ? addAnswerModalBody : null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionHelpful);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/QuestionHelpful.jsx?");

/***/ }),

/***/ "./client/src/QA/QAcomponents/QuestionList.jsx":
/*!*****************************************************!*\
  !*** ./client/src/QA/QAcomponents/QuestionList.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Question_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question.jsx */ \"./client/src/QA/QAcomponents/Question.jsx\");\n/* harmony import */ var _MoreQuestions_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoreQuestions.jsx */ \"./client/src/QA/QAcomponents/MoreQuestions.jsx\");\n/* harmony import */ var _AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddQuestion.jsx */ \"./client/src/QA/QAcomponents/AddQuestion.jsx\");\n\n\n\n\n\nconst QuestionList = ({\n  questions,\n  searchInput,\n  productId,\n  openModal,\n  handleModalOpen,\n  handleModalClose\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"question-list\"\n}, searchInput === null ? questions.slice(0, 5).map((question, count) => count > 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MoreQuestions_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  questions: questions,\n  key: questions.question_id\n}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Question_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  question: question,\n  productId: productId,\n  key: question.question_id\n})) : questions.filter(q => {\n  if (q.question_body.toLowerCase().includes(searchInput.toLowerCase())) {\n    return q;\n  }\n}).slice(0, 5).map((question, count) => count > 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MoreQuestions_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  questions: questions,\n  key: questions.question_id\n}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Question_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  question: question,\n  productId: productId,\n  key: question.question_id\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n  className: \"add-question-button\",\n  onClick: handleModalOpen\n}, \"ADD A QUESTION +\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  productId: productId,\n  openModal: openModal,\n  handleModalClose: handleModalClose\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionList);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/QuestionList.jsx?");

/***/ }),

/***/ "./client/src/QA/QAcomponents/Search.jsx":
/*!***********************************************!*\
  !*** ./client/src/QA/QAcomponents/Search.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Search = ({\n  handleSearch,\n  searchInput\n}) => {\n  const handleFocus = event => {\n    event.preventDefault();\n    const {\n      target\n    } = event;\n    target.setSelectionRange(0, target.value.length);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"qa-search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"qa-search-bar\",\n    placeholder: \"Search for answers...\",\n    onChange: event => handleSearch(event.target.value),\n    onFocus: handleFocus\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./client/src/QA/QAcomponents/Search.jsx?");

/***/ }),

/***/ "./client/src/QA/QAwidget.jsx":
/*!************************************!*\
  !*** ./client/src/QA/QAwidget.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QAcomponents_Search_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QAcomponents/Search.jsx */ \"./client/src/QA/QAcomponents/Search.jsx\");\n/* harmony import */ var _QAcomponents_QuestionList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QAcomponents/QuestionList.jsx */ \"./client/src/QA/QAcomponents/QuestionList.jsx\");\n/* harmony import */ var _QAcomponents_AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QAcomponents/AddQuestion.jsx */ \"./client/src/QA/QAcomponents/AddQuestion.jsx\");\n\n\n\n\n\n\nconst QAwidget = ({\n  productId\n}) => {\n  const [questions, setQuestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [searchInput, setSearchInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const [product, setProduct] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [openModal, setOpenModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/qa/questions', {\n      params: {\n        productId: productId\n      }\n    }).then(response => {\n      setQuestions(response.data);\n    }).catch(err => console.log(err));\n  }, [productId]);\n\n  const handleSearch = searchInput => {\n    searchInput.length > 2 ? setSearchInput(searchInput) : setSearchInput('');\n  };\n\n  const handleModalOpen = () => setOpenModal(true);\n\n  const handleModalClose = () => setOpenModal(false);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"qa-widget\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"qa-header\"\n  }, \"Questions & Answers\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QAcomponents_Search_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    handleSearch: handleSearch,\n    searchInput: searchInput\n  }), questions !== undefined && Object.keys(questions).length !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QAcomponents_QuestionList_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    productId: productId,\n    searchInput: searchInput,\n    questions: questions.results,\n    openModal: openModal,\n    handleModalClose: handleModalClose,\n    handleModalOpen: handleModalOpen\n  }) : null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QAwidget);\n\n//# sourceURL=webpack:///./client/src/QA/QAwidget.jsx?");

/***/ })

}]);