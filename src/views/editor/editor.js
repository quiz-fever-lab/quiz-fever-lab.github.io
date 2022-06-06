import {html} from "../../lib.js";
import {createQuestion} from "./question.js";

const template = (questions) => html`
<section id="editor">

    <header className="pad-large">
        <h1>Questions</h1>
    </header>
${questionList(questions)}
</section>`

const questionList = (question) => html`
    <div className="pad-large alt-page">
        ${questions.map((q, i) => createQuestion(q, i + 1, false))}
        <article className="editor-question">
            <div className="editor-input">
                <button className="input submit action">
                    <i className="fas fa-plus-circle"></i>
                    Add question
                </button>
            </div>
        </article>
    </div>`;

const questions = [
    {
        text: 'Is this the first question?',
        answers: [
            'Yes',
            'No',
            'Maybe'
        ],
        correctIndex: 0,
    },
    {
        text: 'Is this the second question?',
        answers: [
            'Maybe',
            'Yes',
            'No',
        ],
        correctIndex: 1,
    }
];

export async function editorPage(ctx) {
    ctx.render(template(questions));
}