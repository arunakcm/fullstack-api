import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    createMenu(createMenuDto: CreateMenuDto): Promise<{
        name: string;
        depth: number;
        parentId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllMenus(): Promise<any>;
    getMenuById(id: string): Promise<{
        children: any;
        name: string;
        depth: number;
        parentId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(id: string, updateMenuDto: UpdateMenuDto): Promise<{
        name: string;
        depth: number;
        parentId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        depth: number;
        parentId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
