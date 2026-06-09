import { topicData } from "./data/topics.js";

function createTopicNode(topic, parentElement)
{
    const container = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;

    const label = document.createElement("span");
    label.textContent = topic.name;

    container.appendChild(checkbox);
    container.appendChild(label);

    parentElement.appendChild(container);

    if(topic.children)
    {
        const childContainer = document.createElement("div");
        childContainer.className = "topic";

        parentElement.appendChild(childContainer);

        topic.children.forEach(child =>
        {
            createTopicNode(child, childContainer);
        });

        checkbox.addEventListener("change", () =>
        {
            childContainer
                .querySelectorAll("input[type='checkbox']")
                .forEach(box =>
                {
                    box.checked = checkbox.checked;
                });
        });
    }
}

createTopicNode(
    topicData,
    document.getElementById("topicTree")
);
