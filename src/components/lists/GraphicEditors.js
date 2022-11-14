import { List } from "../List"
import { ListWrapper } from "../ListWrapper"

const items = [
    'Figma',
    'Adobe Illustrator',
    'Adobe Photoshop',
]

export const GraphicEditors = () => <ListWrapper name="Graphic Editors" color="black"><List items={items} /></ListWrapper>
