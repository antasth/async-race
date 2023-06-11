import { SourceResponse, DataResponse } from '../../types/index';
import { Endpoints } from '../../types/enum';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data?: SourceResponse) => void): void {
        super.getResp(
            {
                endpoint: Endpoints.sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: (data?: DataResponse) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: Endpoints.everything,
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;