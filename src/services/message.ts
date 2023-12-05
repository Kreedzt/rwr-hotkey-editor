import { showGlobalMessage } from '../store/message';

export class MessageService {
  static instance: MessageService;

  constructor() {
    //
  }

  error(title: string) {
    showGlobalMessage({
      title,
      type: 'error',
    });
  }

  success(title: string) {
    showGlobalMessage({
      title,
      type: 'success',
    });
  }

  warning(title: string) {
    showGlobalMessage({
      title,
      type: 'warning',
    });
  }

  info(title: string) {
    showGlobalMessage({
      title,
      type: 'info',
    });
  }

  static getSelf() {
    if (!this.instance) {
      this.instance = new MessageService();
    }

    return this.instance;
  }
}

export const MessageServiceInst = MessageService.getSelf();
