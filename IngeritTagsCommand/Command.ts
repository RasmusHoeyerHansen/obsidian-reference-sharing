import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export interface ICommand{
    id:string,
    name : string
}

export const InheritTagCommand : ICommand 
{

}