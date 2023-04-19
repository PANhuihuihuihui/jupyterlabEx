import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the nbeval extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'nbeval',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension nbeval is activated!');
  }
};

export default extension;
