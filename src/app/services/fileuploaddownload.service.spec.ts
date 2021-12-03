import { TestBed } from '@angular/core/testing';

import { FileuploaddownloadService } from './fileuploaddownload.service';

describe('FileuploaddownloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileuploaddownloadService = TestBed.get(FileuploaddownloadService);
    expect(service).toBeTruthy();
  });
});
