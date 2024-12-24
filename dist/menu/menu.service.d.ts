import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateMenuDto): Promise<{
        name: string;
        depth: number;
        parentId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(parentId?: string | null): any;
    findById(id: string): Promise<{
        children: any;
        name: string;
        depth: number;
        parentId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateMenu(id: string, data: UpdateMenuDto): Promise<{
        name: string;
        depth: number;
        parentId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteMenu(id: string): Promise<{
        name: string;
        depth: number;
        parentId: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
