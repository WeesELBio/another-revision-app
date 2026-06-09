export const topicData = {

    name: "Biology",

    children: [

        {
            name: "Biological Molecules",

            children: [

                {
                    name: "Introduction to Biological Molecules",

                    questions: [
                        {
                            type: "multiple-choice",

                            question:
                                "Which element is found in all biological molecules?",

                            options: [
                                "Carbon",
                                "Gold",
                                "Iron",
                                "Silver"
                            ],

                            answer: 0
                        }
                    ]
                },

                {
                    name: "Carbohydrates",

                    questions: [
                        {
                            type: "multiple-choice",

                            question:
                                "What is the monomer of starch?",

                            options: [
                                "Glucose",
                                "Amino Acid",
                                "Fatty Acid",
                                "Glycerol"
                            ],

                            answer: 0
                        },

                        {
                            type: "flashcard",

                            question:
                                "State the test for reducing sugars.",

                            answer:
                                "Add Benedict's reagent and heat. A brick-red precipitate indicates reducing sugars."
                        }
                    ]
                },

                {
                    name: "Lipids",

                    questions: [

                        {
                            type: "multiple-select",

                            question:
                                "Which are components of a triglyceride?",

                            options: [
                                "Glycerol",
                                "Fatty Acid",
                                "Amino Acid",
                                "Phosphate"
                            ],

                            answers: [
                                0,
                                1
                            ]
                        }
                    ]
                }
            ]
        },

        {
            name: "Cell Structure",

            children: []
        }
    ]
};
