import { Command } from "obsidian";

import {App} from "obsidian";
import SampleModal from "../Existing Types/SampleModal";


export interface CommandWithCallback extends Command {
	callback: () => any
}

export function AddTags(app : App) : boolean {
	let activePane = app.workspace.getLeaf()
	let activeContainer  = activePane.view.containerEl;



	return true;
}

