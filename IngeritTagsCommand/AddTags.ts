import {Command, WorkspaceLeaf} from "obsidian";

import {App} from "obsidian";
import SampleModal from "../Existing Types/SampleModal";


export interface CommandWithCallback extends Command {
	callback: () => any
}

export function AddTags(app : App) : boolean {
	let activePane: WorkspaceLeaf = app.workspace.activeLeaf;
	activePane.



	return true;
}

