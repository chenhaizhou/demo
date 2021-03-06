package com.thoughtworks.dolphin.controller;

import com.thoughtworks.dolphin.model.Book;
import com.thoughtworks.dolphin.model.Image;
import com.thoughtworks.dolphin.service.BookService;
import junit.framework.TestCase;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.ui.ModelMap;

import static junit.framework.Assert.assertEquals;
import static junit.framework.TestCase.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class BookControllerTest {

    @InjectMocks
    private BookController bookController;

    @Mock
    private BookService bookService;

    @Before
    public void initMocks(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void shouldAddBook(){

        Book book = mock(Book.class);

        final int coverImageId = 100;
        final int insertReturnCode = 1;
        when(book.getCoverImageId()).thenReturn(coverImageId);
        when(bookService.insertBook(book)).thenReturn(insertReturnCode);

        String resultStr = bookController.addBook(book);

        JSONObject expectecResult = new JSONObject();
        expectecResult.put("resultCode", "success");

        assertTrue(resultStr.equals(expectecResult.toString()));
    }

    @Test
    public void shouldIsExist(){

        String isbn = "aslfjasldfkasldfj";
        when(bookService.isExist(isbn)).thenReturn(false);

        boolean resultStr = bookController.checkISBN(isbn, null);
        assertTrue(resultStr == true);
    }

    @Test
    public void shouldGetBookDetail(){

        String bookId = "47";
        Book expectedBook = new Book();
        expectedBook.setAuthor("name");
        expectedBook.setId(47);

        Image image = new Image();
        image.setImageUrl("http://localhost:8080/Library/upload/s2157335_1412991950788.jpg");

        expectedBook.setImage(image);
        expectedBook.setIsbn("12345678");
        expectedBook.setIntroduction("this is a book!");

        when(bookService.getBook(bookId)).thenReturn(expectedBook);

        ModelMap map = new ModelMap();
        bookController.bookDetail(bookId, map);
        Book book = (Book)map.get("book");

        assertEquals(expectedBook.getAuthor(), book.getAuthor());
        assertEquals(expectedBook.getId(), book.getId());
        assertEquals(expectedBook.getCoverImageUrl(), book.getCoverImageUrl());
        assertEquals(expectedBook.getIsbn(), book.getIsbn());
        assertEquals(expectedBook.getIntroduction(), book.getIntroduction());
        assertEquals(expectedBook.getPublisher(), book.getPublisher());

    }

    @Test
    public void shouldEditBook(){

        Book book = new Book();
        book.setId(47);
        book.setAuthor("name");

        final int updateReturnCode = 1;
        when(bookService.updateBook(book)).thenReturn(updateReturnCode);

        String resultStr = bookController.editBook(book);

        JSONObject expectedResult = new JSONObject();
        expectedResult.put("resultCode","success");

        assertTrue(resultStr.equals(expectedResult.toString()));
    }
}
